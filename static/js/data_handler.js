export {dataHandler}

// this object contains the functions which handle the data and its reading/writing
// feel free to extend and change to fit your needs

// (watch out: when you would like to use a property/function of an object from the
// object itself then you must use the 'this' keyword before. For example: 'this._data' below)
let dataHandler = {
    keyInLocalStorage: 'proman-data', // the string that you use as a key in localStorage to save your application data
    _data: {}, // it contains the boards and their cards and statuses. It is not called from outside.
    _loadData: function () {
        // it is not called from outside
        // loads data from local storage, parses it and put into this._data property
        this._data = JSON.parse(localStorage.getItem(this.keyInLocalStorage));
    },
    _saveData: function () {
        // it is not called from outside
        // saves the data from this._data to local storage
        localStorage.setItem(this.keyInLocalStorage, JSON.stringify(this._data));
    },
    init: function () {
        this._loadData();
    },
    synchronise: function () {
        this._saveData()
    },
    deleteData: function (indicator, id) {
        delete this._data[indicator][id]
    },

    getBoards: function (callback) {
        // the boards are retrieved and then the callback function is called with the boards

        let boards = this._data.boards;
        callback(boards);
    },
    getBoard: function (boardId, callback) {

        // the board is retrieved and then the callback function is called with the board
    },
    getStatuses: function (callback) {
        // the statuses are retrieved and then the callback function is called with the statuses
        let statuses = this._data.statuses;
        return callback(statuses)
    },
    getStatus: function (statusId, callback) {
        // the status is retrieved and then the callback function is called with the status
    },
    getCardsByBoardId: function (boardId, callback) {
        let cards = this._data.cards;
        let cardsList = [];
        if(boardId)

        for (let i = 0; i < cards.length; i++) {
            if (cards[i] !== null) {
                if (boardId === cards[i].board_id) {
                    cardsList.push(cards[i]);
                }
            }else {
                return cards
            }


        }
        return callback(cardsList)
        // the cards are retrieved and then the callback function is called with the cards
    },
    getCard: function (cardId, callback) {
        // the card is retrieved and then the callback function is called with the card
    },
    createNewBoard: function (boardTitle, callback) {
        // creates new board, saves it and calls the callback function with its data
    },
    createNewCard: function (cardTitle, boardId, statusId, callback) {
        // creates new card, saves it and calls the callback function with its data
    }
    // here comes more features
};
