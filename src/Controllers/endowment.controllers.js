import endowmentServices from "../Services/endowment.services.js";
import stockServices from "../Services/stock.services.js";
import { searchRegisterSotck } from "../utils/searchStock.js";

export const getEndowment = async (req, res, next) => {
  try {
    const endowment = await endowmentServices.getAll();
    res.status(200).json({
      data: endowment
    });
  } catch (error) {
    next(error);
    throw error;
  }
};

export const createEndowment = async (req, res, next) => {
  const { dateRegister, type, amount } = req.body;
  const dataStock = await stockServices.getAll();
  let formatDate = dateRegister.split("-");
  formatDate = [formatDate[0], formatDate[2], formatDate[1]].join('-');
  let dataUpdateStock = await searchRegisterSotck(
    dataStock,
    formatDate,
    type
  );

  const obj = {
    assigned: (dataUpdateStock.assigned += parseInt(amount, 10)),
    available: (dataUpdateStock.available -= parseInt(amount,10))
  };
  try {
    await stockServices.updateStock(obj, dataUpdateStock.id);
    await endowmentServices.insert(req.body);
    res.status(200).json( "Sucessfull" );
  } catch (error) {
    res.json(error)
  }
};
