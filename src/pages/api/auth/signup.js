import { encryptPassword, comparePassword } from "lib/encrypt";
import prisma from "lib/db";
async function handler(req, res) {
  const data = req.body;
  const { username, password } = data;

  const hashedPassword = await encryptPassword(password);

  await signIn(username, hashedPassword)
    .then(async () => {
      await prisma.$disconnect();
      res.statusCode = 200;
    })
    .catch(async (e) => {
      console.error("Error with creating user: ", e);
      await prisma.$disconnect();
      res.statusCode = 500;
      process.exit(1);
    });
}

async function signIn(username, password) {
  await isUnique(username);
  //   await prisma.$connect();
  await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
}

async function isUnique(username) {
  const allUsers = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  //  console.log(allUsers);

  if (allUsers) {
    console.log(allUsers);
  } else {
    console.log("no user");
  }
}
export default handler;
