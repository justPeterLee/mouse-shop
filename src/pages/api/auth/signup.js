import { encryptPassword, comparePassword } from "lib/encrypt";
import prisma from "lib/db";
async function handler(req, res) {
  const data = req.body;
  const { first, last, email , password } = data;

  const hashedPassword = await encryptPassword(password);

  await signIn(first, last, email, hashedPassword)
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

async function signIn(first, last, email, password) {
  await isUnique(email);
  //   await prisma.$connect();
  await prisma.user.create({
    data: {
      user_name: first,
      user_last: last,
      email: email,
      password: password,
    },
  });
}

async function isUnique(email) {
  const allUsers = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  //  console.log(allUsers);

  if (allUsers) {
    //throw error
  } else {
    console.log("no user");
  }
}
export default handler;
