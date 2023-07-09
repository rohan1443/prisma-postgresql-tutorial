import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany()
  // await prisma.userPreference.deleteMany()
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Rahul Mazumdar",
  //     age: 35,
  //     email: "92.rahul@gmail.com",
  //     userPreferences: {
  //     create: {
  //       emailUpdates: true
  //     }
  //     }
  //   },
  //   include: {
  //     UserPreferences: true
  //   }
  // });
  // console.log(user);
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Rohan Mazumdar",
  //     age: 35,
  //     email: "rohan1443@gmail.com",
  //     userPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   // include: { userPreference: true },
  //   select: {
  //     name: true,
  //     userPreference: {select: {id: true}}
  //   }
  // });
  // const user = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: 'Rohan Mazumdar',
  //       age: 35,
  //       email: 'rohan1443@gmail.com'
  //     },
  //     {
  //       name: 'Shikha Sharma',
  //       age: 33,
  //       email: 'shmaz3278@gmail.com'
  //     }
  //   ]
  // })
  const user = await prisma.user.findUnique({
    where: {
      // email: 'rohan1443@gmail.com'
      age_name: {
        age: 33,
        name: 'Shikha'
      }
    }
  })
  console.log(user)
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
