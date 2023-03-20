exports.matchCompanyLink = (link, name) => {
  const regex = `(https?:\/\/)(www\.)?(${name}\.)+[a-z]{2,}`;
  const companyLink = link.match(regex);
  return companyLink;
};

exports.matchEmail = (s) => {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const email = s.match(regex);
  return email;
};