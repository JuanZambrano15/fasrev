import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function createUser(name: string, email: string, password: string) {
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword,
            },
        });
        return user;
    } catch (error: any) {
        if (error.code === 'P2002') {
            throw new error('El correo ya se encuentra registrado');
        }
        console.error('error al crear el usuario:', error);
        throw new Error('Error al crear al usuario.');
    }
}


export async function findUserByEmail(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    } catch (error) {
        console.error('Error al buscar el usuario por el email', error);
        throw new Error('Error al buscar el usuario');
    }
}


export async function comparePassword(password: string, hashedPassword: string) {
    if (!hashedPassword) {
        return false;
    }
    return await bcrypt.compare(password, hashedPassword);
}