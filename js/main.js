// Config 
var mc_ip = "mc.hypixel.net";
var mc_port = "25565";
var discord_id = "998651654427652226";

// Clipboard
var clipboard = new ClipboardJS('#mcstatus');

// Console
console.log("Website started!!")

// Minecraft Join
function  mcstatus() {
  Swal.fire({
  title: '¡Ip Copiada!',
  text: 'Ya puedes  acceder al servidor de minecraft!',
  icon: 'success',
  confirmButtonText: 'Vale :)'
});
}

// Minecraft Status
$.getJSON(`https://api.minetools.eu/ping/${mc_ip}/${mc_port}`, function (data) {
    
            if (data.error === undefined) {
                document.getElementById('minecraft-count').textContent = data.players.online;
            } else {
    
            }
        });

// Discord Status
$.getJSON(`https://discord.com/api/guilds/${discord_id}/widget.json`, function (data) {
    
            if (data.error === undefined) {
                document.getElementById('discord-count').textContent = data.presence_count;
            } else {
    
            }
        });