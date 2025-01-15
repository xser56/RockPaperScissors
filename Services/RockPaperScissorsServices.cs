using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RockPaperScissors.Services
{
    public class RockPaperScissorsServices
    {
        public string startGame()
        {
            int grabRandom;
            Random rng = new Random();

            List<string> CPUOption = new List<string> 
            {
                "Rock", "Paper", "Scissors", "Lizard", "Spock"
            };

            grabRandom = rng.Next(CPUOption.Count);
            return CPUOption[grabRandom];
        }
    } 
}