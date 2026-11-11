import { ref, get } from "firebase/database";
import { db } from "./firebase";

export async function fetchTeachers() {
  try {
    const teachersRef = ref(db, "teachers");
    const snapshot = await get(teachersRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      const teachersList = Array.isArray(data)
        ? data.map((teacher, index) => ({ id: String(index), ...teacher }))
        : Object.keys(data).map((key) => ({ id: key, ...data[key] }));

      return teachersList;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw error;
  }
}
