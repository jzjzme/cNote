export declare const TokenTransferProxy: {
    "contractName": string;
    "abi": ({
        "constant": boolean;
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "name": string;
        "outputs": {
            "name": string;
            "type": string;
        }[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
    } | {
        "anonymous": boolean;
        "inputs": {
            "indexed": boolean;
            "name": string;
            "type": string;
        }[];
        "name": string;
        "type": string;
    })[];
    "bytecode": string;
    "deployedBytecode": string;
    "sourceMap": string;
    "deployedSourceMap": string;
    "source": string;
    "sourcePath": string;
    "ast": {
        "attributes": {
            "absolutePath": string;
            "exportedSymbols": {
                "TokenTransferProxy": number[];
            };
        };
        "children": ({
            "attributes": {
                "literals": string[];
            };
            "id": number;
            "name": string;
            "src": string;
        } | {
            "attributes": {
                "SourceUnit": number;
                "absolutePath": string;
                "file": string;
                "scope": number;
                "symbolAliases": {
                    "foreign": number;
                    "local": any;
                }[];
                "unitAlias": string;
            };
            "id": number;
            "name": string;
            "src": string;
        } | {
            "attributes": {
                "contractDependencies": number[];
                "contractKind": string;
                "documentation": string;
                "fullyImplemented": boolean;
                "linearizedBaseContracts": number[];
                "name": string;
                "scope": number;
            };
            "children": ({
                "attributes": {
                    "arguments": any[];
                };
                "children": {
                    "attributes": {
                        "contractScope": any;
                        "name": string;
                        "referencedDeclaration": number;
                        "type": string;
                    };
                    "id": number;
                    "name": string;
                    "src": string;
                }[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "children": {
                    "attributes": {
                        "contractScope": any;
                        "name": string;
                        "referencedDeclaration": number;
                        "type": string;
                    };
                    "id": number;
                    "name": string;
                    "src": string;
                }[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "constant": boolean;
                    "name": string;
                    "scope": number;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "type": string;
                    "value": any;
                    "visibility": string;
                };
                "children": {
                    "attributes": {
                        "contractScope": any;
                        "name": string;
                        "referencedDeclaration": number;
                        "type": string;
                    };
                    "id": number;
                    "name": string;
                    "src": string;
                }[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "constant": boolean;
                    "name": string;
                    "scope": number;
                    "stateVariable": boolean;
                    "storageLocation": string;
                    "type": string;
                    "visibility": string;
                };
                "children": ({
                    "attributes": {
                        "name": string;
                        "type": string;
                    };
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "attributes": {
                        "argumentTypes": any;
                        "hexvalue": string;
                        "isConstant": boolean;
                        "isLValue": boolean;
                        "isPure": boolean;
                        "lValueRequested": boolean;
                        "subdenomination": any;
                        "token": string;
                        "type": string;
                        "value": string;
                    };
                    "id": number;
                    "name": string;
                    "src": string;
                })[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "constant": boolean;
                    "implemented": boolean;
                    "isConstructor": boolean;
                    "name": string;
                    "payable": boolean;
                    "scope": number;
                    "stateMutability": string;
                    "superFunction": any;
                    "visibility": string;
                };
                "children": ({
                    "children": {
                        "attributes": {
                            "constant": boolean;
                            "name": string;
                            "scope": number;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "type": string;
                            "value": any;
                            "visibility": string;
                        };
                        "children": {
                            "attributes": {
                                "name": string;
                                "type": string;
                            };
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "attributes": {
                        "parameters": any[];
                    };
                    "children": any[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "attributes": {
                        "arguments": any[];
                    };
                    "children": {
                        "attributes": {
                            "argumentTypes": any;
                            "overloadedDeclarations": any[];
                            "referencedDeclaration": number;
                            "type": string;
                            "value": string;
                        };
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "children": {
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "isStructConstructorCall": boolean;
                                "lValueRequested": boolean;
                                "names": any[];
                                "type": string;
                                "type_conversion": boolean;
                            };
                            "children": ({
                                "attributes": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "member_name": string;
                                    "referencedDeclaration": number;
                                    "type": string;
                                };
                                "children": {
                                    "attributes": {
                                        "argumentTypes": any;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "type": string;
                                        "value": string;
                                    };
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                }[];
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "attributes": {
                                    "argumentTypes": any;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "type": string;
                                    "value": string;
                                };
                                "id": number;
                                "name": string;
                                "src": string;
                            })[];
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                })[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "constant": boolean;
                    "implemented": boolean;
                    "isConstructor": boolean;
                    "modifiers": any[];
                    "name": string;
                    "payable": boolean;
                    "scope": number;
                    "stateMutability": string;
                    "superFunction": any;
                    "visibility": string;
                };
                "children": ({
                    "attributes": {
                        "parameters": any[];
                    };
                    "children": any[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "children": {
                        "attributes": {
                            "constant": boolean;
                            "name": string;
                            "scope": number;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "type": string;
                            "value": any;
                            "visibility": string;
                        };
                        "children": {
                            "attributes": {
                                "length": any;
                                "type": string;
                            };
                            "children": {
                                "attributes": {
                                    "name": string;
                                    "type": string;
                                };
                                "id": number;
                                "name": string;
                                "src": string;
                            }[];
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "children": {
                        "attributes": {
                            "functionReturnParameters": number;
                        };
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "arguments": any[];
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "isStructConstructorCall": boolean;
                                "lValueRequested": boolean;
                                "names": any[];
                                "type": string;
                                "type_conversion": boolean;
                            };
                            "children": {
                                "attributes": {
                                    "argumentTypes": any[];
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "member_name": string;
                                    "referencedDeclaration": number;
                                    "type": string;
                                };
                                "children": {
                                    "attributes": {
                                        "argumentTypes": any;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "type": string;
                                        "value": string;
                                    };
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                }[];
                                "id": number;
                                "name": string;
                                "src": string;
                            }[];
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                })[];
                "id": number;
                "name": string;
                "src": string;
            } | {
                "attributes": {
                    "constant": boolean;
                    "implemented": boolean;
                    "isConstructor": boolean;
                    "modifiers": any[];
                    "name": string;
                    "payable": boolean;
                    "scope": number;
                    "stateMutability": string;
                    "superFunction": any;
                    "visibility": string;
                };
                "children": ({
                    "children": {
                        "attributes": {
                            "constant": boolean;
                            "name": string;
                            "scope": number;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "type": string;
                            "value": any;
                            "visibility": string;
                        };
                        "children": {
                            "attributes": {
                                "name": string;
                                "type": string;
                            };
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    }[];
                    "id": number;
                    "name": string;
                    "src": string;
                } | {
                    "children": ({
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "isStructConstructorCall": boolean;
                                "lValueRequested": boolean;
                                "names": any[];
                                "type": string;
                                "type_conversion": boolean;
                            };
                            "children": ({
                                "attributes": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "type": string;
                                    "value": string;
                                };
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "attributes": {
                                    "argumentTypes": any;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "isStructConstructorCall": boolean;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "type": string;
                                    "type_conversion": boolean;
                                };
                                "children": {
                                    "attributes": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "member_name": string;
                                        "referencedDeclaration": number;
                                        "type": string;
                                    };
                                    "children": {
                                        "attributes": {
                                            "argumentTypes": any;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "type": string;
                                            "value": string;
                                        };
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    }[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                }[];
                                "id": number;
                                "name": string;
                                "src": string;
                            })[];
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    } | {
                        "attributes": {
                            "functionReturnParameters": number;
                        };
                        "children": {
                            "attributes": {
                                "argumentTypes": any;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "isStructConstructorCall": boolean;
                                "lValueRequested": boolean;
                                "names": any[];
                                "type": string;
                                "type_conversion": boolean;
                            };
                            "children": ({
                                "attributes": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "member_name": string;
                                    "referencedDeclaration": number;
                                    "type": string;
                                };
                                "children": {
                                    "attributes": {
                                        "argumentTypes": any;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "isStructConstructorCall": boolean;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "type": string;
                                        "type_conversion": boolean;
                                    };
                                    "children": {
                                        "attributes": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "type": string;
                                            "value": string;
                                        };
                                        "id": number;
                                        "name": string;
                                        "src": string;
                                    }[];
                                    "id": number;
                                    "name": string;
                                    "src": string;
                                }[];
                                "id": number;
                                "name": string;
                                "src": string;
                            } | {
                                "attributes": {
                                    "argumentTypes": any;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "type": string;
                                    "value": string;
                                };
                                "id": number;
                                "name": string;
                                "src": string;
                            })[];
                            "id": number;
                            "name": string;
                            "src": string;
                        }[];
                        "id": number;
                        "name": string;
                        "src": string;
                    })[];
                    "id": number;
                    "name": string;
                    "src": string;
                })[];
                "id": number;
                "name": string;
                "src": string;
            })[];
            "id": number;
            "name": string;
            "src": string;
        })[];
        "id": number;
        "name": string;
        "src": string;
    };
    "compiler": {
        "name": string;
        "version": string;
    };
    "networks": {
        "1": {
            "events": {
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                };
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                };
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
            };
            "links": {};
            "address": string;
        };
        "42": {
            "events": {
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                };
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                };
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
            };
            "links": {};
            "address": string;
        };
        "70": {
            "events": {
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                };
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                };
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                };
            };
            "links": {};
            "address": string;
        };
    };
    "schemaVersion": string;
    "updatedAt": string;
};
