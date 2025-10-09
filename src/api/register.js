export async function registrarUsuario(data) {
  return await fetch("https://im.bmstecnology.com/create_user.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
