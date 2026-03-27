function initMap() {
    if (!MAP_TOKEN || !coordinates) return console.error("Missing data");

    mapboxgl.accessToken = MAP_TOKEN;

    const coords = typeof coordinates === "string"
        ? JSON.parse(coordinates)
        : coordinates;

    if (!Array.isArray(coords) || coords.length !== 2)
        return console.error("Invalid coords:", coords);

    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: coords,
        zoom: 9
    });

    new mapboxgl.Marker({ color: "red" })
        .setLngLat(coords)
        .setPopup(
            new mapboxgl.Popup({ offset: 25, closeOnClick: false })
                .setHTML(`<h3>${listing.title}</h3><p>Exact location after booking</p>`)
        )
        .addTo(map)
}

initMap();