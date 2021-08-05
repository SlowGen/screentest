import {v4 as uuid} from 'uuid';

const circle = {
    id: uuid(),
    type: 'circle',
    color: '#0044ff',
    x: 25,
    y: 25,
    radius: 25,
    start: 0,
    end: Math.PI * 2,
    isSelected: false,
}

export default circle;