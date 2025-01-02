// import { DataSource } from 'typeorm';
// import { faker } from '@faker-js/faker';
// import { User } from './src/entities/user.entity';
// import { Profile } from './src/entities/profile.entity';
// import { Post } from './src/entities/post.entity';
// import { Tag } from './src/entities/tag.entity';
// import 'dotenv/config';
// const dataSource = new DataSource({
//   type: 'postgres',
//   database: process.env.DATABASE_URL,
//   entities: [User, Profile, Post, Tag],
//   synchronize: false,
// });

// console.log({ DATABASE_URL: process.env.DATABASE_URL });

// async function seed() {
//   await dataSource.initialize();

//   const userRepository = dataSource.getRepository(User);
//   const profileRepository = dataSource.getRepository(Profile);
//   const postRepository = dataSource.getRepository(Post);
//   const tagRepository = dataSource.getRepository(Tag);

//   const tags = [];
//   for (let i = 0; i < 5; i++) {
//     const tag = tagRepository.create({ name: faker.word.noun() });
//     tags.push(await tagRepository.save(tag));
//   }

//   for (let i = 0; i < 10; i++) {
//     const profile = profileRepository.create({
//       bio: faker.lorem.sentence(),
//       avatar: faker.image.avatar(),
//     });

//     const user = userRepository.create({
//       username: faker.internet.username(),
//       email: faker.internet.email(),
//       profile,
//     });

//     const savedUser = await userRepository.save(user);

//     for (let j = 0; j < 10; j++) {
//       const post = postRepository.create({
//         title: faker.lorem.words(5),
//         content: faker.lorem.paragraph(),
//         user: savedUser,
//         tags: faker.helpers.arrayElements(tags),
//       });
//       await postRepository.save(post);
//     }
//   }

//   console.log('Database seeding completed!');
//   await dataSource.destroy();
// }

// seed().catch((error) => {
//   console.error('Error seeding database:', error);
// });
