function status(request, response){
  response.status(200).send({chave: "the resource is always constantly changing"});
}
export default status // por conveção é padrao
