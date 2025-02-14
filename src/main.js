// src/main.js

// Configuration de Supabase
const supabaseUrl = "https://ezxhzjuvpnxfodcsbdqd.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6eGh6anV2cG54Zm9kY3NiZHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NDc5MDAsImV4cCI6MjA1NDUyMzkwMH0.IBACopZNg494lW8OwyaKhwJ3-CMQvF7tUm5wopW9xtA"

// Initialisation du client Supabase
const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey)

// Fonction pour récupérer les participants (table de base)
async function getParticipants() {
  console.log("Récupération des participants en cours...")
  try {
    const { data, error } = await supabase
      .from('participants')
      .select('*')
    
    if (error) throw error
    
    console.log("Données participants récupérées avec succès:", data)
    document.getElementById("participants").textContent = JSON.stringify(data, null, 2)
  } catch (error) {
    console.error("Erreur lors de la récupération des participants:", error.message)
    document.getElementById("participants").textContent = "Erreur lors du chargement des participants: " + error.message
  }
}

// Fonction pour récupérer les totaux par wallet depuis la vue wallet_totals
async function getWalletTotals() {
  console.log("Récupération des totaux par wallet (wallet_totals)...")
  try {
    const { data, error } = await supabase
      .from('wallet_totals')
      .select('*')
    
    if (error) throw error
    
    console.log("Données wallet_totals récupérées avec succès:", data)
    document.getElementById("walletTotals").textContent = JSON.stringify(data, null, 2)
  } catch (error) {
    console.error("Erreur lors de la récupération des wallet_totals:", error.message)
    document.getElementById("walletTotals").textContent = "Erreur lors du chargement des wallet_totals: " + error.message
  }
}

// Fonction pour récupérer les totaux de références depuis la vue referals
async function getReferals() {
  console.log("Récupération des totaux de referals...")
  try {
    const { data, error } = await supabase
      .from('referals')
      .select('*')
    
    if (error) throw error
    
    console.log("Données referals récupérées avec succès:", data)
    document.getElementById("referals").textContent = JSON.stringify(data, null, 2)
  } catch (error) {
    console.error("Erreur lors de la récupération des referals:", error.message)
    document.getElementById("referals").textContent = "Erreur lors du chargement des referals: " + error.message
  }
}

// Appels initiaux pour charger les données dès que le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  getParticipants()
  getWalletTotals()
  getReferals()
})
