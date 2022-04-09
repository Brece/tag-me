import {
    collection,
    query,
    doc,
    getDocs
} from "firebase/firestore";
import { db } from "./firebase.config";

async function getImage(imageName) {
    try {
        let image;
        const imageQuery = query(collection(db, 'IMAGES'));
        const querySnapshot = await getDocs(imageQuery);
        querySnapshot.forEach((doc) => {
            const imageFile = doc.data();
            if (imageFile.ALT === imageName) {
                image = imageFile;
            }
        });

        if (image === undefined) {
            alert('This image does not exist.')
        }
        console.log(image);

        return image;
    } catch(error) {
        console.error('Error loading image from Firebase Database', error)
    }
}

export { getImage };
