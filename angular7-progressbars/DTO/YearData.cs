/*==============================================================
 * Copyright (c) 2019,Peter Barbanyaga Date: 03.2019
 * Version IDE: MS VS 2017
 * Designed by: Peter Barbanyaga / barbanyaga@gmail.com [03.2019]
 *=============================================================*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angular7_progressbars.DTO
{
	public class YearData
	{
		/// <summary>
		/// Year of data
		/// </summary>
		public int Year { get; set; }


		public CircleData Circle1 { get; set; }

		public CircleData Circle2 { get; set; }

		public IEnumerable<CategoryData> Categories { get; set; }
	}
}
