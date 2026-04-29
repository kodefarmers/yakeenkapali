// src/pages/UnderConstruction.jsx
export default function UnderConstruction() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚧 Under Construction</h1>
      <p style={styles.text}>
        We’re working on something awesome. Check back soon.
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#241B35",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  text: {
    opacity: 0.7,
  },
};