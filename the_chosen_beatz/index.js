export default function Home() {
  return (
    <main style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      fontFamily: "sans-serif",
      backgroundColor: "#000"
    }}>
      <img 
        src="/logo.jpg" 
        alt="The Chosen Beats and Music" 
        style={{ 
          maxWidth: "90%", 
          height: "auto", 
          borderRadius: "16px", 
          boxShadow: "0 4px 20px rgba(0,0,0,0.6)" 
        }} 
      />
      <h1 style={{ color: "#fff", marginTop: "20px" }}>Welcome to The Chosen Beatz 🎶</h1>
      <p style={{ color: "#ddd" }}>Your music, your vibe, your store.</p>
    </main>
  )
}
