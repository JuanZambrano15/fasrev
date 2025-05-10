import { findUserByEmail, comparePassword } from '../db'; // Importa tus funciones de Prisma
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
    const { email, password } = await request.json();

    if (!email || !password) {
        return new Response(JSON.stringify({ message: 'Por favor, introduce tu email y contraseña.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
        });
    }

    const user = await findUserByEmail(email);

    if (!user) {
        return new Response(JSON.stringify({ message: 'Usuario no encontrado.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
        });
    }

    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
        return new Response(JSON.stringify({ message: 'Credenciales incorrectas.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
        });
    }

    // Autenticación exitosa
    // Aquí podrías generar un token de sesión y enviarlo en la respuesta
    return new Response(JSON.stringify({ message: 'Inicio de sesión exitoso!', userId: user.id }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });

    } catch (error: any) {
    console.error('Error al iniciar sesión en la API:', error);
    return new Response(JSON.stringify({ message: 'Error al iniciar sesión en el servidor.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
    });
    }
}