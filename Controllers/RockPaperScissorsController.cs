using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RockPaperScissors.Services;

namespace RockPaperScissors.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RockPaperScissorsController : ControllerBase
    {
        private readonly RockPaperScissorsServices _rockpaperScissorsService;
        public RockPaperScissorsController(RockPaperScissorsServices rockPaperScissorsServices)
        {
            _rockpaperScissorsService = rockPaperScissorsServices;
        }

        [HttpGet]
        [Route("BeginGame")]
        public string BeginGame()
        {
            return _rockpaperScissorsService.startGame();
        }
    }
}