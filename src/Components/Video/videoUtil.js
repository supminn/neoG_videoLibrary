export const videoExists = (list, id) => list.some((val) => val === id);

export const imageURL = id => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const videoURL = id => `https://www.youtube.com/watch?v=${id}`;

export const formatNumber = value => {
    const num = Number(value);
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

export const formatDate = date => {
    const dateVal = new Date(date);
    return dateVal.toDateString().substring(4);
}
