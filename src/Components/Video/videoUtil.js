export const videoExists = (list, id) => list.some((val) => val === id);

export const imageURL = id => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const videoURL = id => `https://www.youtube.com/watch?v=${id}`;