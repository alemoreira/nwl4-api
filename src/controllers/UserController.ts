import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

class UserController {

  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    // const userRepository = getRepository(User);
    const userRepository = getCustomRepository(UserRepository);

    console.log(email);
    const userAlreadyExists = await userRepository.findOne({ email });
    console.log(userAlreadyExists);

    if (userAlreadyExists) {
      return response.status(400).json({
        error: "User already exists!"
      })
    }

    const user = userRepository.create({ name, email });

    const userSaved = await userRepository.save(user);

    return response.status(201).json(userSaved);
  }
}

export default UserController;
// export { UserController };