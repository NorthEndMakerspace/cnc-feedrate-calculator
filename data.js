// Materials
let material_details = [
  {
    id: "hardwood",
    name_html: "Hardwood <small>(maple, oak, walnut)</small>",
    is_advanced: false,
  },
  {
    id: "brittle_hardwood",
    name_html: "Brittle hardwood <small>(torrified maple)</small>",
    is_advanced: true,
  },
  {
    id: "softwood",
    name_html: "Softwood <small>(fir, pine, cedar)</small> and Plywood",
    is_advanced: false,
  },
  {
    id: "mdf",
    name_html: "MDF",
    is_advanced: false,
  },
  {
    id: "hpl",
    name_html: "High pressure laminate",
    is_advanced: true,
  },
  {
    id: "phenolic",
    name_html: "Phenolic",
    is_advanced: true,
  },
  {
    id: "hard_plastic",
    name_html:
      "Hard plastic <small>(Delrin, PC, PVC, Nylon, PET/PETG, PBT)</small>",
    is_advanced: false,
  },
  {
    id: "soft_plastic",
    name_html: "Soft plastic <small>(ABS, HDPE, LDPE, PP, PTFE)</small>",
    is_advanced: false,
  },
  {
    id: "solid_surface",
    name_html: "solid_surface",
    is_advanced: true,
  },
  {
    id: "acrylic",
    name_html: "Acrylic",
    is_advanced: true,
  },
  {
    id: "aluminum",
    name_html: "Aluminum",
    is_advanced: true,
  },
];

// Taken from https://qic.tools/chipload-calculator/
let chipload_data = [
  {
    material: "hardwood",
    tool_diameter: 0.125,
    min: 0.003,
    max: 0.005,
  },
  {
    material: "hardwood",
    tool_diameter: 0.25,
    min: 0.009,
    max: 0.011,
  },
  {
    material: "hardwood",
    tool_diameter: 0.375,
    min: 0.015,
    max: 0.018,
  },
  {
    material: "hardwood",
    tool_diameter: 0.5,
    min: 0.019,
    max: 0.021,
  },

  {
    material: "softwood",
    tool_diameter: 0.125,
    min: 0.004,
    max: 0.006,
  },
  {
    material: "softwood",
    tool_diameter: 0.25,
    min: 0.011,
    max: 0.013,
  },
  {
    material: "softwood",
    tool_diameter: 0.375,
    min: 0.017,
    max: 0.02,
  },
  {
    material: "softwood",
    tool_diameter: 0.5,
    min: 0.021,
    max: 0.023,
  },

  {
    material: "mdf",
    tool_diameter: 0.125,
    min: 0.004,
    max: 0.007,
  },
  {
    material: "mdf",
    tool_diameter: 0.25,
    min: 0.013,
    max: 0.016,
  },
  {
    material: "mdf",
    tool_diameter: 0.375,
    min: 0.02,
    max: 0.023,
  },
  {
    material: "mdf",
    tool_diameter: 0.5,
    min: 0.025,
    max: 0.027,
  },

  {
    material: "hpl",
    tool_diameter: 0.125,
    min: 0.003,
    max: 0.005,
  },
  {
    material: "hpl",
    tool_diameter: 0.25,
    min: 0.009,
    max: 0.012,
  },
  {
    material: "hpl",
    tool_diameter: 0.375,
    min: 0.015,
    max: 0.018,
  },
  {
    material: "hpl",
    tool_diameter: 0.5,
    min: 0.023,
    max: 0.025,
  },

  {
    material: "phenolic",
    tool_diameter: 0.25,
    min: 0.004,
    max: 0.006,
  },
  {
    material: "phenolic",
    tool_diameter: 0.375,
    min: 0.006,
    max: 0.008,
  },
  {
    material: "phenolic",
    tool_diameter: 0.5,
    min: 0.01,
    max: 0.012,
  },

  {
    material: "hard_plastic",
    tool_diameter: 0.125,
    min: 0.002,
    max: 0.004,
  },
  {
    material: "hard_plastic",
    tool_diameter: 0.25,
    min: 0.006,
    max: 0.009,
  },
  {
    material: "hard_plastic",
    tool_diameter: 0.375,
    min: 0.008,
    max: 0.01,
  },
  {
    material: "hard_plastic",
    tool_diameter: 0.5,
    min: 0.01,
    max: 0.012,
  },

  {
    material: "soft_plastic",
    tool_diameter: 0.125,
    min: 0.003,
    max: 0.006,
  },
  {
    material: "soft_plastic",
    tool_diameter: 0.25,
    min: 0.007,
    max: 0.01,
  },
  {
    material: "soft_plastic",
    tool_diameter: 0.375,
    min: 0.01,
    max: 0.012,
  },
  {
    material: "soft_plastic",
    tool_diameter: 0.5,
    min: 0.012,
    max: 0.016,
  },

  {
    material: "solid_surface",
    tool_diameter: 0.125,
    min: 0.002,
    max: 0.004,
  },
  {
    material: "solid_surface",
    tool_diameter: 0.25,
    min: 0.006,
    max: 0.009,
  },
  {
    material: "solid_surface",
    tool_diameter: 0.375,
    min: 0.008,
    max: 0.01,
  },
  {
    material: "solid_surface",
    tool_diameter: 0.5,
    min: 0.01,
    max: 0.012,
  },

  {
    material: "acrylic",
    tool_diameter: 0.125,
    min: 0.003,
    max: 0.005,
  },
  {
    material: "acrylic",
    tool_diameter: 0.25,
    min: 0.008,
    max: 0.01,
  },
  {
    material: "acrylic",
    tool_diameter: 0.375,
    min: 0.01,
    max: 0.012,
  },
  {
    material: "acrylic",
    tool_diameter: 0.5,
    min: 0.012,
    max: 0.015,
  },

  {
    material: "aluminum",
    tool_diameter: 0.125,
    min: 0.003,
    max: 0.004,
  },
  {
    material: "aluminum",
    tool_diameter: 0.25,
    min: 0.005,
    max: 0.007,
  },
  {
    material: "aluminum",
    tool_diameter: 0.375,
    min: 0.006,
    max: 0.007,
  },
  {
    material: "aluminum",
    tool_diameter: 0.5,
    min: 0.008,
    max: 0.01,
  },
].map((x) => {
  // Make all the canned data more conservative
  x.min = ((x.min * 2) / 3).toFixed(4);
  x.max = ((x.max * 2) / 3).toFixed(4);
  return x;
});

// Fretslot cutting
chipload_data.push({
  material: "hardwood",
  tool_diameter: 0.023,
  min: 0.001,
  doc_override: 0.005,
});
// On a shopbot, possibly too conservative?
// chipload_data.push({
//   material: "hardwood",
//   tool_diameter: 0.021,
//   min: 0.00028,
//   doc_override: 0.0079,
// });

// Engraving mahjong piece design
chipload_data.push({
  material: "aluminum",
  tool_diameter: 0.019,
  min: 0.0039,
  doc_override: 0.0001,
});

// brittle_hardwood = 2/3 of modified hw
for (let x of chipload_data.filter((x) => x.material == "hardwood")) {
  chipload_data.push({
    material: "brittle_hardwood",
    tool_diameter: x.tool_diameter,
    min: ((x.min * 2) / 3).toFixed(4),
    max: ((x.max * 2) / 3).toFixed(4),
  });
}

// Add 0,0 for all materials so that materials missing smaller bit sizes can interpolate towards zero.
for (let x of material_details) {
  // According to https://www.cnccookbook.com/chip-thinning-rubbing-lesson-3-fs-email/, "0.0008″ per tooth is definitely burnishing because it is “less than the edge hone typically applied to the insert.”"
  chipload_data.push({
    material: x.id,
    tool_diameter: 0,
    min: 0.0008,
  });
}
