"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/************************************
 *  Core Dharma Protocol Contracts  *
 ************************************/
// A contract for handling the filling of debt orders.
var DebtKernel_1 = require("./ts/DebtKernel");
exports.DebtKernel = DebtKernel_1.DebtKernel;
// A contract for storing detailed information about debt agreements.
var DebtRegistry_1 = require("./ts/DebtRegistry");
exports.DebtRegistry = DebtRegistry_1.DebtRegistry;
// A contract for handling loan repayments.
var RepaymentRouter_1 = require("./ts/RepaymentRouter");
exports.RepaymentRouter = RepaymentRouter_1.RepaymentRouter;
// A contract used for transferring ERC20 tokens among various agents.
var TokenTransferProxy_1 = require("./ts/TokenTransferProxy");
exports.TokenTransferProxy = TokenTransferProxy_1.TokenTransferProxy;
// Stores the addresses of core Dharma Protocol Contracts.
var ContractRegistry_1 = require("./ts/ContractRegistry");
exports.ContractRegistry = ContractRegistry_1.ContractRegistry;
// A prototype for terms contracts.
var TermsContract_1 = require("./ts/TermsContract");
exports.TermsContract = TermsContract_1.TermsContract;
// A wrapper for the Dharma Debt Token (ERC721 standard.)
var DebtToken_1 = require("./ts/DebtToken");
exports.DebtToken = DebtToken_1.DebtToken;
/************************************
 *  ERC20 Simple Interest Contracts *
 ************************************/
// A contract for storing the addresses of ERC20 contracts.
var TokenRegistry_1 = require("./ts/TokenRegistry");
exports.TokenRegistry = TokenRegistry_1.TokenRegistry;
// Used to store ("lock") ERC20 collateral used in debt agreements.
var Collateralizer_1 = require("./ts/Collateralizer");
exports.Collateralizer = Collateralizer_1.Collateralizer;
// A abstract terms contract for simple interest loans.
var SimpleInterestTermsContract_1 = require("./ts/SimpleInterestTermsContract");
exports.SimpleInterestTermsContract = SimpleInterestTermsContract_1.SimpleInterestTermsContract;
// A terms contract for creating ERC20-collateralized simple interest terms debt agreements.
var CollateralizedSimpleInterestTermsContract_1 = require("./ts/CollateralizedSimpleInterestTermsContract");
exports.CollateralizedSimpleInterestTermsContract = CollateralizedSimpleInterestTermsContract_1.CollateralizedSimpleInterestTermsContract;
// A wrapper for the ERC20 token standard.
var ERC20_1 = require("./ts/ERC20");
exports.ERC20 = ERC20_1.ERC20;
// Used for creating test ERC20 tokens during development and on test networks like Kovan.
var DummyToken_1 = require("./ts/DummyToken");
exports.DummyToken = DummyToken_1.DummyToken;
/********************************
 *  ERC721 Collateral Contracts *
 ********************************/
// A terms contract for creating ERC721-collateralized simple interest debt agreements.
var ERC721CollateralizedSimpleInterestTermsContract_1 = require("./ts/ERC721CollateralizedSimpleInterestTermsContract");
exports.ERC721CollateralizedSimpleInterestTermsContract = ERC721CollateralizedSimpleInterestTermsContract_1.ERC721CollateralizedSimpleInterestTermsContract;
// A contract to store (or "lock") ERC721 assets that are used in debt agreements.
var ERC721Collateralizer_1 = require("./ts/ERC721Collateralizer");
exports.ERC721Collateralizer = ERC721Collateralizer_1.ERC721Collateralizer;
// A contract used to reference the addresses of various ERC721 contracts.
var ERC721TokenRegistry_1 = require("./ts/ERC721TokenRegistry");
exports.ERC721TokenRegistry = ERC721TokenRegistry_1.ERC721TokenRegistry;
// The ERC721 token standard.
var ERC721Token_1 = require("./ts/ERC721Token");
exports.ERC721Token = ERC721Token_1.ERC721Token;
// An ERC721 contract with the ability to mint tokens -- for test purposes.
var MintableERC721Token_1 = require("./ts/MintableERC721Token");
exports.MintableERC721Token = MintableERC721Token_1.MintableERC721Token;
/************************************
 *  Creditor-Driven Loan Contracts  *
 ************************************/
var CreditorProxy_1 = require("./ts/CreditorProxy");
exports.CreditorProxy = CreditorProxy_1.CreditorProxy;
/********************
 *  Misc. Contracts *
 ********************/
var ERC721Receiver_1 = require("./ts/ERC721Receiver");
exports.ERC721Receiver = ERC721Receiver_1.ERC721Receiver;
var MockERC721Receiver_1 = require("./ts/MockERC721Receiver");
exports.MockERC721Receiver = MockERC721Receiver_1.MockERC721Receiver;
// The core CryptoKitties contract -- used for testing collateralizing CryptoKitties, which
// are a non-standard NFT.
var KittyCore_1 = require("./ts/KittyCore");
exports.KittyCore = KittyCore_1.KittyCore;
//# sourceMappingURL=index.js.map