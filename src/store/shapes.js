import rectangle from "../models/rectangle";
import circle from "../models/circle";
import {
  addShape,
  updateShape,
  removeShape,
  oneSelected,
  manySelected,
  noneSelected,
  showHover,
  moveSelected,
  ADD_SHAPE,
  UPDATE_SHAPE,
  REMOVE_SHAPE,
  ONE_SELECTED,
  MANY_SELECTED,
  NONE_SELECTED,
  SHOW_HOVER,
  MOVE_SELECTED,
} from "./actions";

const initialState = [];
let shapeCache; //aids in performance

export const createShape = (shapeType) => (dispatch, getState) => {
  const { shapes } = getState();

  //location calculations are to ensure no shapes are drawn off-canvas and scatter to avoid overlap
  if (shapeType === "rectangle") {
    const newRect = rectangle();

    newRect.x += (shapes.length % 10) * ((shapes.length % 10) * 10);
    newRect.y += (shapes.length % 10) * ((shapes.length % 5) * 10);

    shapes.push(newRect);
    dispatch(addShape(shapes));
  } else if (shapeType === "circle") {
    const newCircle = circle();

    newCircle.x += (shapes.length % 10) * ((shapes.length % 10) * 10);
    newCircle.y += (shapes.length % 10) * ((shapes.length % 5) * 10);

    shapes.push(newCircle);
    dispatch(addShape(shapes));
  }
};

export const editShape = (shape, property, newValue) => (dispatch) => {
  if (shape.type === "rectangle") {
    switch (property) {
      case "width":
        dispatch(updateShape((shape.width = newValue)));
        break;
      case "height":
        dispatch(updateShape((shape.height = newValue)));
        break;
      case "color":
        dispatch(updateShape((shape.color = newValue)));
        break;
      default:
        break;
    }
  } else {
    switch (property) {
      case "radius":
        dispatch(updateShape((shape.radius = newValue)));
        break;
      case "color":
        dispatch(updateShape((shape.color = newValue)));
        break;
      default:
        break;
    }
  }
};

export const deleteShape = (deletedShape) => (dispatch, getState) => {
  const { shapes } = getState();
  const newShapes = shapes.filter((shape) => shape !== deletedShape);

  dispatch(removeShape(newShapes));
};

export const selectOneShape = (index) => (dispatch, getState) => {
  const { shapes } = getState();

  shapes[index].isSelected = !shapes[index].isSelected;

  dispatch(oneSelected(shapes));
};

export const selectManyShapes = (index) => (dispatch, getState) => {
  const { shapes } = getState();

  shapes[index].isSelected = true;

  dispatch(manySelected(shapes));
};

export const selectNoShapes = () => (dispatch, getState) => {
  const { shapes } = getState();

  shapes.forEach((shape) => (shape.isSelected = false));

  dispatch(noneSelected(shapes));
};

export const toggleHoverOn = (index) => (dispatch, getState) => {
  const { shapes } = getState();

  shapes.forEach((shape) => (shape.isHovered = false));
  shapes[index].isHovered = true;

  dispatch(showHover(shapes));
};

export const toggleHoverOff = () => (dispatch, getState) => {
  const { shapes } = getState();

  shapes.forEach((shape) => (shape.isHovered = false));

  dispatch(showHover(shapes));
};

export const moveShapes =
  (mousePosition, shapeCenter, activeSelection) => (dispatch, getState) => {
    const { shapes } = getState();
    const selected = shapes.filter((shape) => shape.isSelected);

    const mouseX = mousePosition[0];
    const mouseY = mousePosition[1];

    const shapeX = shapeCenter[0];
    const shapeY = shapeCenter[1];

    const deltaX = mouseX - shapeX;
    const deltaY = mouseY - shapeY;

    let shape = activeSelection || shapeCache; //aids in performance
    let movingShapeType = shape.type;

    if (activeSelection) shapeCache = activeSelection;

    const locationChange = (shape) => {
      switch ([shape, movingShapeType]) {
        case ["rectangle", "rectangle"]:
          shape.x = shape.x + deltaX / 2;
          shape.y = shape.y + deltaY / 2;
          break;
        case ["circle", "circle"]:
          shape.x = shape.x + deltaX;
          shape.y = shape.y + deltaY;
          break;
        case ["rectangle", "circle"]:
          shape.x = shape.x + deltaX * 2;
          shape.y = shape.y + deltaY * 2;
          break;
        case ["circle", "rectangle"]:
          shape.x = shape.x + deltaX / 2;
          shape.y = shape.y + deltaY / 2;
          break;
        default:
          shape.x = shape.x + deltaX;
          shape.y = shape.y + deltaY;
      }
    };

    if (!selected.length) {
      locationChange(shape);
    } else {
      selected.forEach((shape) => locationChange(shape));
    }

    dispatch(moveSelected(shapes));
  };

export const shapes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHAPE:
      return [...state];
    case UPDATE_SHAPE:
      return [...state];
    case REMOVE_SHAPE:
      return action.shapes;
    case ONE_SELECTED:
      return [...state];
    case MANY_SELECTED:
      return [...state];
    case NONE_SELECTED:
      return [...state];
    case SHOW_HOVER:
      return [...state];
    case MOVE_SELECTED:
      return [...state];
    default:
      return state;
  }
};
