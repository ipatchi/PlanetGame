const testing = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { targets: { node: 'current' } }],
  ];

  return {
    presets,
  };
};

export { testing };
