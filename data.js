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
  // {
  //   id: "solid_surface",
  //   name_html: "solid_surface",
  //   is_advanced: true,
  // },
  {
    id: "acrylic",
    name_html: "Acrylic",
    is_advanced: true,
  },
  {
    id: "aluminum",
    name_html: "Aluminum (6061-T6, 6063, 2011), Brass (C360)",
    is_advanced: true,
  },
];

// Taken from https://qic.tools/chipload-calculator/
let material_data = [
  {
    material: "hardwood",
    tool_diameter: 0.125,
    chipload: 0.003,
  },
  {
    material: "hardwood",
    tool_diameter: 0.25,
    chipload: 0.009,
  },
  {
    material: "hardwood",
    tool_diameter: 0.375,
    chipload: 0.015,
  },
  {
    material: "hardwood",
    tool_diameter: 0.5,
    chipload: 0.019,
  },

  {
    material: "softwood",
    tool_diameter: 0.125,
    chipload: 0.004,
  },
  {
    material: "softwood",
    tool_diameter: 0.25,
    chipload: 0.011,
  },
  {
    material: "softwood",
    tool_diameter: 0.375,
    chipload: 0.017,
  },
  {
    material: "softwood",
    tool_diameter: 0.5,
    chipload: 0.021,
  },

  {
    material: "mdf",
    tool_diameter: 0.125,
    chipload: 0.004,
  },
  {
    material: "mdf",
    tool_diameter: 0.25,
    chipload: 0.013,
  },
  {
    material: "mdf",
    tool_diameter: 0.375,
    chipload: 0.02,
  },
  {
    material: "mdf",
    tool_diameter: 0.5,
    chipload: 0.025,
  },

  {
    material: "hpl",
    tool_diameter: 0.125,
    chipload: 0.003,
  },
  {
    material: "hpl",
    tool_diameter: 0.25,
    chipload: 0.009,
  },
  {
    material: "hpl",
    tool_diameter: 0.375,
    chipload: 0.015,
  },
  {
    material: "hpl",
    tool_diameter: 0.5,
    chipload: 0.023,
  },

  {
    material: "phenolic",
    tool_diameter: 0.25,
    chipload: 0.004,
  },
  {
    material: "phenolic",
    tool_diameter: 0.375,
    chipload: 0.006,
  },
  {
    material: "phenolic",
    tool_diameter: 0.5,
    chipload: 0.01,
  },

  {
    material: "hard_plastic",
    tool_diameter: 0.125,
    chipload: 0.002,
  },
  {
    material: "hard_plastic",
    tool_diameter: 0.25,
    chipload: 0.006,
  },
  {
    material: "hard_plastic",
    tool_diameter: 0.375,
    chipload: 0.008,
  },
  {
    material: "hard_plastic",
    tool_diameter: 0.5,
    chipload: 0.01,
  },

  {
    material: "soft_plastic",
    tool_diameter: 0.125,
    chipload: 0.003,
  },
  {
    material: "soft_plastic",
    tool_diameter: 0.25,
    chipload: 0.007,
  },
  {
    material: "soft_plastic",
    tool_diameter: 0.375,
    chipload: 0.01,
  },
  {
    material: "soft_plastic",
    tool_diameter: 0.5,
    chipload: 0.012,
  },

  // {
  //   material: "solid_surface",
  //   tool_diameter: 0.125,
  //   chipload: 0.002,
  // },
  // {
  //   material: "solid_surface",
  //   tool_diameter: 0.25,
  //   chipload: 0.006,
  // },
  // {
  //   material: "solid_surface",
  //   tool_diameter: 0.375,
  //   chipload: 0.008,
  // },
  // {
  //   material: "solid_surface",
  //   tool_diameter: 0.5,
  //   chipload: 0.01,
  // },

  {
    material: "acrylic",
    tool_diameter: 0.125,
    chipload: 0.003,
  },
  {
    material: "acrylic",
    tool_diameter: 0.25,
    chipload: 0.008,
  },
  {
    material: "acrylic",
    tool_diameter: 0.375,
    chipload: 0.01,
  },
  {
    material: "acrylic",
    tool_diameter: 0.5,
    chipload: 0.012,
  },

  {
    material: "aluminum",
    tool_diameter: 0.125,
    chipload: 0.003,
  },
  {
    material: "aluminum",
    tool_diameter: 0.25,
    chipload: 0.005,
  },
  {
    material: "aluminum",
    tool_diameter: 0.375,
    chipload: 0.006,
  },
  {
    material: "aluminum",
    tool_diameter: 0.5,
    chipload: 0.008,
  },
].map((x) => {
  // Make all the canned data more conservative
  x.chipload = Number.parseFloat(((x.chipload * 2) / 3).toFixed(4));

  switch (x.material) {
    case "softwood":
    case "mdf":
      x.depth_of_cut = x.tool_diameter;
      break;

    case "acrylic":
    case "hard_plastic":
      x.depth_of_cut = x.tool_diameter * 0.45;
      break;

    case "aluminum":
      x.depth_of_cut = x.tool_diameter * 0.0625;
      break;

    default:
      x.depth_of_cut = x.tool_diameter * 0.5;
      break;
  }

  return x;
});

let include_anecdotal_data = false;
if (include_anecdotal_data) {
  // Fretslot cutting
  material_data.push({
    material: "hardwood",
    tool_diameter: 0.023,
    chipload: 0.001,
    depth_of_cut: 0.005,
  });
  // On a shopbot, possibly too conservative?
  // material_data.push({
  //   material: "hardwood",
  //   tool_diameter: 0.021,
  //   chipload: 0.00028,
  //   depth_of_cut: 0.0079,
  // });

  // Engraving mahjong piece design
  material_data.push({
    material: "aluminum",
    tool_diameter: 0.019,
    chipload: 0.0039,
    depth_of_cut: 0.0001,
  });
}

// brittle_hardwood = 2/3 of modified hw
for (let x of material_data.filter((x) => x.material == "hardwood")) {
  let copy = structuredClone(x);
  copy.material = "brittle_hardwood";
  copy.chipload = ((x.chipload * 2) / 3).toFixed(4);
  material_data.push(copy);
}

// According to https://www.cnccookbook.com/chip-thinning-rubbing-lesson-3-fs-email/, "0.0008″ per tooth is definitely burnishing because it is “less than the edge hone typically applied to the insert.”"
let minimum_tool_engagement = 0.001;
// Add 0,0 for all materials so that materials missing smaller bit sizes can interpolate towards zero.
for (let x of material_details) {
  material_data.push({
    material: x.id,
    tool_diameter: 0,
    chipload: minimum_tool_engagement,
    depth_of_cut: minimum_tool_engagement,
  });
}

for (let x of material_data) {
  if (
    !x.material ||
    Number(x.tool_diameter) < 0 ||
    Number(x.chipload) <= 0 ||
    Number(x.depth_of_cut) <= 0
  ) {
    console.error(`invalid material data entry:`, x);
  }
}
