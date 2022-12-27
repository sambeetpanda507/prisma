import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['query'] });

const main = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        preferences: true,
      },
    });

    console.log('users: ', users);
  } catch (error: any) {
    console.log(error.message);
  } finally {
    console.log('Disconnecting...');
    await prisma.$disconnect();
  }
};

main();
