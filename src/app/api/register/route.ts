import { createUser } from '../db'; // Tu función de Prisma
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
    const { name, email, password } = await request.json();

    // Hashear la contraseña en el servidor
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser(name, email, hashedPassword);

    return new Response(JSON.stringify({ message: 'Usuario registrado exitosamente', user: newUser }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
    } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message || 'Error al registrar el usuario en el servidor.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
    });
    }
}