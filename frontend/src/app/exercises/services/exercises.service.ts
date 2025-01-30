const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

async function getExercises() {
  const data = await fetch(`${BACKEND_URL}/exercises`, {
    cache: "no-store", // para evitar que el navegador guarde la respuesta en caché
  });
  return await data.json();
} 

async function getExercise(id: any) {
  const data = await fetch(`${BACKEND_URL}/exercises/${id}`, {
    cache: "no-store", 
  });
  return await data.json();
}

async function createExercise(exerciseData: any) {
  const response = await fetch(`${BACKEND_URL}/exercises`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(exerciseData),
  });
  const data = await response.json();
  console.log(data);
}

async function deleteExercise(id: any) {
  const res = await fetch(`${BACKEND_URL}/exercises/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}

async function updateExercise(id: any, editedExercise: any) {
  const res = await fetch(`${BACKEND_URL}/exercises/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedExercise),
    cache: "no-store",
  });
  return await res.json();
}

export {
  createExercise,
  getExercises,
  deleteExercise,
  getExercise,
  updateExercise,
};
