module.exports = str => {
  if (!str || !str.trim()) return '';
  
  return str
    .replace(/^[a-z]/, $0 => $0.toUpperCase())
    .replace(/([^-])(?:-+([^-]))/g, function ($0, $1, $2) {
      return $1 + $2.toUpperCase();
    });
}