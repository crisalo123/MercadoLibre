export const mockUserData = {
  fullName: "Camilo Vargas",
  email: "camilo@example.com",
  address: "Calle 123, Bogotá",
  country: "4",
};

export const mockCountries = [
  { value: "1", label: "Argentina" },
  { value: "2", label: "Brazil" },
  { value: "3", label: "Chile" },
  { value: "4", label: "Colombia" },
  { value: "5", label: "Mexico" },
  { value: "6", label: "Peru" },
  { value: "7", label: "Uruguay" },
];

export const getMockUserData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUserData), 500); // Simula delay
  });
};

export const getMockCountries = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCountries), 500);
  });
};
