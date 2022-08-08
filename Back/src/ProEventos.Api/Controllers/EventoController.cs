using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProEventos.Interfaces;
using ProEventos.Services.Dtos;
using System;
using System.Net;
using System.Threading.Tasks;

namespace ProEventos.Api.Controllers
{
    [ApiController]
    [Route("/eventos")]
    public class EventoController : BaseController
    {
        private readonly IEventoService _eventoService;

        public EventoController(IEventoService eventoService, IMapper mapper)
        {
            _eventoService = eventoService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var eventos = await _eventoService.GetAllEventosAsync(true);
                if (eventos == null) return NoContent();


                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return this.StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpGet("{eventoId}")]
        public async Task<IActionResult> GetById(int eventoId)
        {
            try
            {
                var eventos = await _eventoService.GetAllEventosByIdAsync(eventoId, true);
                if (eventos == null) return NoContent();
                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return this.StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpGet("/tema/{tema}")]
        public async Task<IActionResult> GetByTema(string tema)
        {
            try
            {
                var eventos = await _eventoService.GetAllEventosByTemaAsync(tema, true);
                if (eventos == null) return NoContent();

                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return this.StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> InsertEvento(int eventoId, EventoDto evento)
        {
            try
            {
                var eventos = await _eventoService.UpdateEvento(eventoId, evento);
                if (eventos == null) BadRequest("Erro ao inserir evento");

                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return this.StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }

        }

        [HttpDelete("{eventoId}")]
        public async Task<IActionResult> DeletarEvento(int eventoId)
        {
            try
            {
                var eventos = await _eventoService.DeleteEvento(eventoId);

                return Ok("Deletado");
            }
            catch (Exception ex)
            {
                return this.StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateEvento(int eventoId)
        {
            try
            {
                var eventos = await _eventoService.DeleteEvento(eventoId);
                if (!eventos) BadRequest("Erro ao atualizar evento");

                return Ok(eventos);
            }
            catch (Exception ex)
            {
                return this.StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}