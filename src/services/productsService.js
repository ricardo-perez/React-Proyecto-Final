import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
const productsRef = collection(db, 'products');
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    const productsFormat = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productsFormat;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const getProductById = async (id) => {
  try {
    const productRef = doc(db, 'products', id);
    const snapshot = await getDoc(productRef);
    if (snapshot.exists()) {
      const productFormat = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      return productFormat;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return docRef.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};
