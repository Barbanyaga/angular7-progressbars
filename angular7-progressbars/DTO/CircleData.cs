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
	public class CircleData
	{
		public string Name { get; set; }
		public int Value { get; set; }
		public int MaxValue { get; set; }

		public CircleData(string name, int value, int maxValue)
		{
			this.Name = name;
			this.Value = value;
			this.MaxValue = maxValue;
		}

	}
}
