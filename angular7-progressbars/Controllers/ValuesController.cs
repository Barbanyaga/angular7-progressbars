/*==============================================================
 * Copyright (c) 2019,Peter Barbanyaga Date: 03.2019
 * Version IDE: MS VS 2017
 * Designed by: Peter Barbanyaga / barbanyaga@gmail.com [03.2019]
 *=============================================================*/
using angular7_progressbars.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angular7_progressbars.Controllers
{
	[Route("api/[controller]")]
	public class ValuesController : Controller
	{
		// GET: api/<controller>
		// api/values/byYear?year=2017
		[HttpGet("byYear")]
		public IEnumerable<YearData> Get([FromQuery]int year)
		{
			var res = new YearData[] {
				new YearData(){
					Year = 2017,
					Circle1 = new CircleData ("Circle1", 30, 40),
					Circle2 = new CircleData ("Circle2", 60, 100),
					Categories = new CategoryData[]
					{
						new CategoryData("cat1", 4, 10),
						new CategoryData("cat2", 2, 10),
						new CategoryData("cat3", 7, 12),
						new CategoryData("cat4", 4, 10),
						new CategoryData("cat5", 8, 10),
						new CategoryData("cat6", 3, 10),
						new CategoryData("cat7", 4, 10),
						new CategoryData("cat8", 4, 10),
						new CategoryData("cat11", 4, 10),
						new CategoryData("cat12", 2, 10),
						new CategoryData("cat13", 7, 12),
						new CategoryData("cat14", 4, 10),
						new CategoryData("cat15", 8, 10),
						new CategoryData("cat16", 3, 10),
					}
				},
				new YearData(){
					Year = 2018,
					Circle1 = new CircleData ("Circle3", 10, 60),
					Circle2 = new CircleData ("Circle4", 75, 100),
					Categories = new CategoryData[]
					{
						new CategoryData("cat1", 2, 10),
						new CategoryData("cat2", 8, 10),
						new CategoryData("cat3", 1, 12),
						new CategoryData("cat4", 6, 10),
						new CategoryData("cat5", 8, 10),
						new CategoryData("cat6", 3, 10),
						new CategoryData("cat7", 9, 10),
						new CategoryData("cat8", 10, 10)
					}
				},
				new YearData(){
					Year = 2019,
					Circle1 = new CircleData ("Circle5", 30, 80),
					Circle2 = new CircleData ("Circle6", 33, 100),
					Categories = new CategoryData[]
					{
						new CategoryData("cat1", 7, 10),
						new CategoryData("cat2", 3, 10),
						new CategoryData("cat3", 2, 12),
						new CategoryData("cat4", 9, 10),
						new CategoryData("cat5", 9, 10),
						new CategoryData("cat6", 5, 10),
						new CategoryData("cat7", 7, 10),
						new CategoryData("cat8", 12, 12)
					}
				},
			};
			return res.Where(x => x.Year == year);
		}
	}
}
