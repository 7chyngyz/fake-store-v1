interface IProducts {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity: number;
}

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface ISignin {
  email: string;
  password: string;
}

interface IProductFromApi {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity: number;
}
