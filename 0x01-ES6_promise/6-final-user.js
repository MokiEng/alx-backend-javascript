// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const [userData, photoData] = await Promise.all([userPromise, photoPromise]);

  return [
    { status: 'fulfilled', value: userData },
    { status: 'rejected', value: photoData },
  ];
}
