export type ModelNumberGuide = {
  slug: string;
  name: string;
  title: string;
  description: string;
  examples: string[];
  locations: { title: string; detail: string }[];
  beforeYouLook: string[];
  labels: { label: string; meaning: string }[];
  nextSearch: string;
};

export const modelNumberGuides: ModelNumberGuide[] = [
  {
    slug: "washing-machines",
    name: "Washing machines",
    title: "Where to find a washing machine model number",
    description: "Look inside the door opening, behind the door, under a top-loader lid, or on the rear label. Keep every suffix because similar machines can use different code tables.",
    examples: ["WF45T6000AW", "WM4000HWA", "WGG244Z0GB"],
    locations: [
      { title: "Door opening", detail: "Inspect the rim around the drum after the machine has stopped." },
      { title: "Door or lid", detail: "Check the inner face of the door or underside of a top-loader lid." },
      { title: "Rear panel", detail: "Use a phone camera without moving a connected machine unsafely." },
    ],
    beforeYouLook: ["Pause the cycle and wait for the drum to stop.", "Do not tip or move a connected machine.", "Photograph the entire label."],
    labels: [
      { label: "Model / E-Nr", meaning: "Exact product family and configuration." },
      { label: "Serial / S/N", meaning: "Unique unit identifier; keep it private." },
      { label: "Product code / PNC", meaning: "Regional or parts configuration." },
    ],
    nextSearch: "washing machine",
  },
  {
    slug: "dishwashers",
    name: "Dishwashers",
    title: "Where to find a dishwasher model number",
    description: "Open the door and inspect its top edge, side edges, and the tub frame. Integrated models often hide every useful label when closed.",
    examples: ["SHPM65Z55N", "DW80B7070US", "LDFN4542S"],
    locations: [
      { title: "Top door edge", detail: "Open the door fully and inspect the horizontal edge facing upward." },
      { title: "Side door edges", detail: "Check the narrow vertical edges hidden when the door is closed." },
      { title: "Tub frame", detail: "Look around the opening, especially near the latch." },
    ],
    beforeYouLook: ["Let hot steam clear.", "Do not remove an electrical service panel.", "Capture suffixes and production codes."],
    labels: [
      { label: "Model / E-Nr", meaning: "Exact machine family." },
      { label: "Serial / S/N", meaning: "Unique unit identifier." },
      { label: "Type / PNC", meaning: "Platform or parts identifier." },
    ],
    nextSearch: "dishwasher",
  },
  {
    slug: "printers",
    name: "Printers",
    title: "Where to find a printer model number",
    description: "Check the front product name, rear or underside regulatory label, consumables door, or a printed configuration report.",
    examples: ["HP OfficeJet Pro 9015e", "Epson ET-2850", "Canon MF455dw"],
    locations: [
      { title: "Front panel", detail: "The marketed family name is normally printed near the display." },
      { title: "Rear or underside", detail: "Product number, serial, and regulatory model are commonly grouped here." },
      { title: "Configuration report", detail: "The control-panel report can list model, serial, firmware, and network details." },
    ],
    beforeYouLook: ["Power off before lifting a printer.", "Avoid hot fuser areas.", "Record both product name and product number."],
    labels: [
      { label: "Product name", meaning: "Used for drivers and consumables." },
      { label: "Product number / SKU", meaning: "Regional configuration." },
      { label: "Serial number", meaning: "Unique device identifier." },
    ],
    nextSearch: "printer",
  },
  {
    slug: "routers",
    name: "Routers and gateways",
    title: "Where to find a router model number",
    description: "Router labels are usually on the base or rear and can contain private Wi-Fi credentials. Record the model and hardware revision without publishing the full label.",
    examples: ["Archer AX55", "RT-AX86U", "BGW320-505"],
    locations: [
      { title: "Base label", detail: "Turn the unit only when cables have enough slack." },
      { title: "Rear panel", detail: "Look beside Ethernet, fiber, DSL, coax, or power connections." },
      { title: "Admin page", detail: "Device information often lists model and hardware revision." },
    ],
    beforeYouLook: ["Hide Wi-Fi passwords and QR codes.", "Do not bend or disconnect fiber cables.", "Record the hardware revision."],
    labels: [
      { label: "Model", meaning: "Commercial device family." },
      { label: "Hardware version", meaning: "Physical revision used for firmware compatibility." },
      { label: "MAC / Serial", meaning: "Private unique identifiers." },
    ],
    nextSearch: "router wifi",
  },
  {
    slug: "smart-tvs",
    name: "Smart TVs",
    title: "Where to find a smart TV model number",
    description: "Use the settings menu, rear label, original box, or purchase account. Keep the complete screen-size and regional suffix.",
    examples: ["QN55Q80CAFXZA", "OLED55C3PUA", "XR-65X90L"],
    locations: [
      { title: "Settings menu", detail: "Open Support, About, Device information, or System information." },
      { title: "Rear label", detail: "Use a phone camera or mirror instead of moving a mounted TV." },
      { title: "Original box", detail: "The shipping label usually shows the complete model and screen size." },
    ],
    beforeYouLook: ["Do not move a large TV alone.", "Keep the serial number private.", "Include the full regional suffix."],
    labels: [
      { label: "Model code", meaning: "Size, series, year, and regional configuration." },
      { label: "Version / Type", meaning: "Production or panel revision." },
      { label: "Serial number", meaning: "Unique unit identifier." },
    ],
    nextSearch: "smart tv",
  },
  {
    slug: "laptops",
    name: "Laptops",
    title: "Where to find a laptop model number",
    description: "Use system information, the bottom label, firmware setup, or the original box. A marketing family name is often not specific enough for drivers and parts.",
    examples: ["MacBookPro18,3", "Dell XPS 9320", "Lenovo 82WK"],
    locations: [
      { title: "System information", detail: "Use About this Mac, Windows System Information, or the manufacturer support app." },
      { title: "Bottom cover", detail: "Look for model, type, MTM, product number, or service tag." },
      { title: "BIOS or UEFI", detail: "Firmware information commonly lists product and serial identifiers." },
    ],
    beforeYouLook: ["Prefer software lookup over removing covers.", "Do not publish service tags.", "Record the family and exact product-number suffix."],
    labels: [
      { label: "Model / Product name", meaning: "Main support family." },
      { label: "Machine type / Product number", meaning: "Exact configuration." },
      { label: "Serial / Service tag", meaning: "Private unique identifier." },
    ],
    nextSearch: "laptop",
  },
];

export function getModelNumberGuide(slug: string) {
  return modelNumberGuides.find((guide) => guide.slug === slug);
}
