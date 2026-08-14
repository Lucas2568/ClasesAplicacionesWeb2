function mostrarAlerta(mensaje, esExito = true) {
	const alerta = document.getElementById('alerta');
	const alertaMensaje = document.getElementById('alerta-mensaje');
	const alertaCerrar = document.getElementById('alerta-cerrar');
	
	if (!alerta || !alertaMensaje) return;
	
	alertaMensaje.textContent = mensaje;
	alerta.classList.remove('alerta-oculta', 'alerta-exito', 'alerta-error');
	alerta.classList.add(esExito ? 'alerta-exito' : 'alerta-error');
	
	alertaCerrar.onclick = () => {
		alerta.classList.add('alerta-oculta');
	};
}

async function obtenerDatos() {
	try {
		const respuesta = await fetch('recursos/datos/productos.json');
		if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
		const datos = await respuesta.json();
		renderProductos(datos);
		mostrarAlerta('✓ Los datos han sido renderizados correctamente.', true);
	} catch (error) {
		console.error('Error al obtener datos:', error);
		const cont = document.getElementById('contenedor');
		if (cont) cont.innerHTML = '<p class="error">No se pudieron cargar los productos.</p>';
		mostrarAlerta('✗ Error al renderizar los datos. Intenta nuevamente.', false);
	}
}

function renderProductos(productos) {
	const cont = document.getElementById('contenedor');
	if (!cont) return;
	cont.innerHTML = '';
	if (!Array.isArray(productos) || productos.length === 0) {
		cont.innerHTML = '<p>No hay productos disponibles.</p>';
		return;
	}
	productos.forEach(p => {
		const article = document.createElement('article');
		article.className = 'producto';

		const h3 = document.createElement('h3');
		h3.className = 'nombre';
		h3.textContent = p.nombre ?? p.name ?? 'Sin nombre';

		const precio = document.createElement('data');
		precio.className = 'precio';
		precio.setAttribute('value', p.precio ?? p.price ?? '');
		precio.textContent = `Precio: $${p.precio ?? p.price ?? '-'}`;

		const stock = document.createElement('data');
		stock.className = 'stock';
		stock.setAttribute('value', p.stock ?? '');
		stock.textContent = `Stock: ${p.stock ?? '-'}`;

		article.appendChild(h3);
		article.appendChild(precio);
		article.appendChild(stock);
		cont.appendChild(article);
	});
}

// Exponer la función globalmente y ejecutarla al cargar la página
window.obtenerDatos = obtenerDatos;
document.addEventListener('DOMContentLoaded', obtenerDatos);
