import './style.css'
import { createClient } from '@supabase/supabase-js'

// Configuration de Supabase
const supabaseUrl = "https://ezxhzjuvpnxfodcsbdqd.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6eGh6anV2cG54Zm9kY3NiZHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NDc5MDAsImV4cCI6MjA1NDUyMzkwMH0.IBACopZNg494lW8OwyaKhwJ3-CMQvF7tUm5wopW9xtA"

// Initialisation du client Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Fonction pour récupérer les participants
async function getParticipants() {
  console.log("Récupération des participants en cours...")
  
  try {
    const { data, error } = await supabase
      .from('participants')
      .select('*')
    
    if (error) {
      throw error
    }
    
    console.log("Données récupérées avec succès:", data)
    document.getElementById("participants").textContent = JSON.stringify(data, null, 2)
  } catch (error) {
    console.error("Erreur lors de la récupération des participants:", error.message)
    document.getElementById("participants").textContent = "Erreur lors du chargement des données: " + error.message
  }
}

// Appel initial pour charger les participants
getParticipants()
