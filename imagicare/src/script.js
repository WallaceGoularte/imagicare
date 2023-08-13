document.addEventListener("DOMContentLoaded", function() {
    const exameSelect = document.getElementById("exame");
    const medicoSelect = document.getElementById("medico");
    const dataInput = document.getElementById("data");
    const horariosTable = document.getElementById("horarios");
  
    const medicos = ["Dr. Smith", "Dra. Johnson", "Dr. Williams", "Dra. Brown"];

    const horariosDisponiveis = [
        { hora: "09:00", medico: medicos[0] },
        { hora: "10:00", medico: medicos[1] },
        { hora: "11:00", medico: medicos[2] },
        { hora: "14:00", medico: medicos[3] },
    ];
  
    exameSelect.addEventListener("change", atualizarHorarios);
    medicoSelect.addEventListener("change", atualizarHorarios);
    dataInput.addEventListener("change", atualizarHorarios);
  
    function atualizarHorarios() {
        const exameSelecionado = exameSelect.value;
        const medicoSelecionado = medicoSelect.value;
        const dataSelecionada = dataInput.value;
      
        // Filtrar os horários disponíveis com base nas seleções
        const horariosFiltrados = horariosDisponiveis.filter(horario => {
          return horario.medico === medicoSelecionado;
        });
      
        // Limpar a tabela de horários
        horariosTable.innerHTML = "";
      
        // Preencher a tabela com os horários filtrados (no mínimo 3)
        for (let i = 0; i < Math.min(3, horariosFiltrados.length); i++) {
          const horario = horariosFiltrados[i];
          const row = horariosTable.insertRow();
          const cellHora = row.insertCell(0);
          const cellMedico = row.insertCell(1);
      
          cellHora.innerText = horario.hora;
          cellMedico.innerText = horario.medico;
        }
      }
  
    // Atualizar os horários iniciais ao carregar a página
    atualizarHorarios();
  });
  