import { makeStyles } from "tss-react/mui";


const imageModalStyles = makeStyles()((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    position: "relative",
    width: "90vw",
    height: "90vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#111",
    borderRadius: 12,
    overflow: "hidden",
  },

  modalImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },

  leftButton: {
    position: "absolute",
    left: 10,
    color: "#fff",
    zIndex: 2,
  },

  rightButton: {
    position: "absolute",
    right: 10,
    color: "#fff",
    zIndex: 2,
  },
}));

export default imageModalStyles;