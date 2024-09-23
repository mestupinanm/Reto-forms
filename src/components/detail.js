import React from "react";
import { useParams } from "react-router-dom";

function Detail({ mascotas }) {
  const { mascotaId } = useParams();
  const mascota = mascotas.find((m) => m.id === parseInt(mascotaId));

  return (
    <div>
      <h2>Detalles de {mascota.nombre}</h2>
      <img src={mascota.foto} alt={mascota.descripcion} />
      <p>{mascota.raza}</p>
    </div>
  );
}

export default Detail;