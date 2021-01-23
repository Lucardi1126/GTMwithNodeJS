// Clan.js

  const mongoose = require("mongoose");

  const ClanSchema = new mongoose.Schema({
    nombreClan: {type: String, required: true}, // nombre del Clan
    categoria: { type: String, enum: ['rpg', 'shooter', 'otro'] }, 
    fotos: [String], // links a las fotografías
    descripcion: {type:String, required: true}, // descripción del Clan
    teamleader: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'}, // c
    ubicacion: { type: String }, // De donde es el clan
    estado:{type: String, enum:['cerrado', 'disponible', 'por completar']},
  }, { timestamps: true })
  
  MascotaSchema.methods.publicData = function(){
    return {
      id: this.id,
      nombreClan: this.nombreClan,
      categoria: this.categoria,
      fotos: this.fotos,
      descripcion: this.descripcion,
      teamleader: this.teamleader,
      ubicacion: this.ubicacion,
      estado: this.estado
    };
  };
  
  mongoose.model('Clan', ClanSchema)