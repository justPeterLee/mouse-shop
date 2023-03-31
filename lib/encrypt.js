import {genSaltSync, hashSync, compareSync}  from 'bcryptjs';

const SALT_WORK_FACTOR = 10;

async function encryptPassword(password){
    const salt = await genSaltSync(SALT_WORK_FACTOR);
    return hashSync(password, salt)
}

async function comparePassword(resPassword, storedPassword){
    return await compareSync(resPassword, storedPassword)
}

export{
    encryptPassword,
    comparePassword
}