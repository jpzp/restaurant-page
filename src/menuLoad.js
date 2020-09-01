const menuLoad = () => {
    const content = document.querySelector("#content");

    //info/resv
        const menu = document.createElement('section');
        menu.setAttribute('class', 'menu');

        const name = document.createElement('h1');
        name.appendChild(document.createTextNode("L'Jep"));
        const menuH = document.createElement('h2');
        menuH.appendChild(document.createTextNode("Menu"));

        menu.appendChild(name);
        menu.appendChild(menuH);

        
        //APPS
        const appsH = document.createElement('h2');
        appsH.appendChild(document.createTextNode("Appetizers"));
        menu.appendChild(appsH);

        const apps = document.createElement("div");
        apps.setAttribute('class', 'apps');
        //1
        let a1 = document.createElement('div');
        a1.setAttribute('class', 'food-items');
        let a1Item = document.createElement('h3');
        a1Item.appendChild(document.createTextNode("CARPACCIO DI MANZO"));
        let a1p = document.createElement('p');
        a1p.appendChild(document.createTextNode('Thin slices of beef topped with fresh mushrooms, arugula and shaved parmesan cheese, drizzled with white truffle oil. Served with focaccia bread.'));
        a1.appendChild(a1Item);
        a1.appendChild(a1p);
        //2
        let a2 = document.createElement('div');
        a2.setAttribute('class', 'food-items');
        let a2Item = document.createElement('h3');
        a2Item.appendChild(document.createTextNode("CALAMARI FRITTI"));
        let a2p = document.createElement('p');
        a2p.appendChild(document.createTextNode('Fried calamari, zucchini, and yellow squash. Served with spicy pomodoro and garlic aioli sauce.'));
        a2.appendChild(a2Item);
        a2.appendChild(a2p);
        //3
        let a3 = document.createElement('div');
        a3.setAttribute('class', 'food-items');
        let a3Item = document.createElement('h3');
        a3Item.appendChild(document.createTextNode("SPINACH FORMAGGIO"));
        let a3p = document.createElement('p');
        a3p.appendChild(document.createTextNode('A creamy spinach and artichoke hearts dip, blended with a mixture of cheeses. Served with garlic bread.'));
        a3.appendChild(a3Item);
        a3.appendChild(a3p);
        //4
        let a4 = document.createElement('div');
        a4.setAttribute('class', 'food-items');
        let a4Item = document.createElement('h3');
        a4Item.appendChild(document.createTextNode("TROPICAL TUNA TARTAR"));
        let a4p = document.createElement('p');
        a4p.appendChild(document.createTextNode('A delicious tower of freshly diced tuna, avocado and mango. Drizzled with miso and citrus soy sauce. Topped with microgreens.'));
        a4.appendChild(a4Item);
        a4.appendChild(a4p);
        //5
        let a5 = document.createElement('div');
        a5.setAttribute('class', 'food-items');
        let a5Item = document.createElement('h3');
        a5Item.appendChild(document.createTextNode("EGGPLANT PARMIGIANA"));
        let a5p = document.createElement('p');
        a5p.appendChild(document.createTextNode('Deep fried, beer-battered eggplant slices, topped with pomodoro sauce, melted mozzarella and Parmesan cheese.'));
        a5.appendChild(a5Item);
        a5.appendChild(a5p);
        //6
        let a6 = document.createElement('div');
        a6.setAttribute('class', 'food-items');
        let a6Item = document.createElement('h3');
        a6Item.appendChild(document.createTextNode("POLPO ALLA GRIGLIA"));
        let a6p = document.createElement('p');
        a6p.appendChild(document.createTextNode('Tender marinated octopus grilled to perfection, served over sliced potatoes with extra virgin olive oil, fried chickpeas, microgreens, and spicy mayonnaise.'));
        a6.appendChild(a6Item);
        a6.appendChild(a6p);

        apps.appendChild(a1);
        apps.appendChild(a2);
        apps.appendChild(a3);
        apps.appendChild(a4);
        apps.appendChild(a5);
        apps.appendChild(a6);
        menu.appendChild(apps);

        //ENTREES
        const entrH = document.createElement('h2');
        entrH.appendChild(document.createTextNode("Entrees"));
        menu.appendChild(entrH);

        const entr = document.createElement("div");
        entr.setAttribute('class', 'entrees');

        //1
        let e1 = document.createElement('div');
        e1.setAttribute('class', 'food-items');
        let e1Item = document.createElement('h3');
        e1Item.appendChild(document.createTextNode("RUOTA DI PARMIGIANO"));
        let e1p = document.createElement('p');
        e1p.appendChild(document.createTextNode('Our ultimate table side experience! Creamy fettuccine Alfredo tossed in a Parmigiano-Reggiano wheel to give it an extraordinary and rich flavor.'));
        e1.appendChild(e1Item);
        e1.appendChild(e1p);
        //2
        let e2 = document.createElement('div');
        e2.setAttribute('class', 'food-items');
        let e2Item = document.createElement('h3');
        e2Item.appendChild(document.createTextNode("LASAGNA ALLA BOLOGNESE"));
        let e2p = document.createElement('p');
        e2p.appendChild(document.createTextNode('Layers of thin pasta, hearty meat sauce, ricotta, Parmesan and mozzarella cheese, topped with a delicious pink sauce.'));
        e2.appendChild(e2Item);
        e2.appendChild(e2p);
        //3
        let e3 = document.createElement('div');
        e3.setAttribute('class', 'food-items');
        let e3Item = document.createElement('h3');
        e3Item.appendChild(document.createTextNode("FARFALLE SALMONE"));
        let e3p = document.createElement('p');
        e3p.appendChild(document.createTextNode('Served with sautéed salmon, tossed in a creamy vodka pink sauce with asparagus.'));
        e3.appendChild(e3Item);
        e3.appendChild(e3p);
        //4
        let e4 = document.createElement('div');
        e4.setAttribute('class', 'food-items');
        let e4Item = document.createElement('h3');
        e4Item.appendChild(document.createTextNode("SEAFOOD RAVIOLI"));
        let e4p = document.createElement('p');
        e4p.appendChild(document.createTextNode('Stuffed with lobster and shrimp, tossed in a savory yellow pepper cream sauce, with zucchini and cherry tomatoes, and a grilled half lobster tail.'));
        e4.appendChild(e4Item);
        e4.appendChild(e4p);
        //5
        let e5 = document.createElement('div');
        e5.setAttribute('class', 'food-items');
        let e5Item = document.createElement('h3');
        e5Item.appendChild(document.createTextNode("FETUCCINE ALFREDO"));
        let e5p = document.createElement('p');
        e5p.appendChild(document.createTextNode('Tossed in a cream, butter, and Parmesan cheese sauce.'));
        e5.appendChild(e5Item);
        e5.appendChild(e5p);
        //6
        let e6 = document.createElement('div');
        e6.setAttribute('class', 'food-items');
        let e6Item = document.createElement('h3');
        e6Item.appendChild(document.createTextNode("FRUTTI DI MARE"));
        let e6p = document.createElement('p');
        e6p.appendChild(document.createTextNode('Linguine pasta tossed with shrimp, mussels, clams, and calamari with garlic, white wine and basil in a savory pomodoro sauce.'));
        e6.appendChild(e6Item);
        e6.appendChild(e6p);

        entr.appendChild(e1);
        entr.appendChild(e2);
        entr.appendChild(e3);
        entr.appendChild(e4);
        entr.appendChild(e5);
        entr.appendChild(e6);

        menu.appendChild(entr);

        //DESSERT
        const dessH = document.createElement('h2');
        dessH.appendChild(document.createTextNode("Desserts"));
        menu.appendChild(dessH);

        const dess = document.createElement("div");
        dess.setAttribute('class', 'dessert');
        //1
        let d1 = document.createElement('div');
        d1.setAttribute('class', 'food-items');
        let d1Item = document.createElement('h3');
        d1Item.appendChild(document.createTextNode("DECADENT FUDGE BROWNIE"));
        let d1p = document.createElement('p');
        d1p.appendChild(document.createTextNode('Finished with walnuts. Served warm with vanilla ice cream topped with a red wine-berry mixed compote.'));
        d1.appendChild(d1Item);
        d1.appendChild(d1p);
        //2
        let d2 = document.createElement('div');
        d2.setAttribute('class', 'food-items');
        let d2Item = document.createElement('h3');
        d2Item.appendChild(document.createTextNode("CRÈME BÛLÉE"));
        let d2p = document.createElement('p');
        d2p.appendChild(document.createTextNode('A traditional vanilla custard topped with caramelized brown sugar and fresh berries.'));
        d2.appendChild(d2Item);
        d2.appendChild(d2p);
        //3
        let d3 = document.createElement('div');
        d3.setAttribute('class', 'food-items');
        let d3Item = document.createElement('h3');
        d3Item.appendChild(document.createTextNode("TIRAMISU"));
        let d3p = document.createElement('p');
        d3p.appendChild(document.createTextNode('Delicious ladyfingers, dipped in espresso, Amaretto, and coffee liquor, layered with mascarpone-vanilla mousse.'));
        d3.appendChild(d3Item);
        d3.appendChild(d3p);
        //4
        let d4 = document.createElement('div');
        d4.setAttribute('class', 'food-items');
        let d4Item = document.createElement('h3');
        d4Item.appendChild(document.createTextNode("ITALIAN CHEESECAKE"));
        let d4p = document.createElement('p');
        d4p.appendChild(document.createTextNode('Cheesecake at its best! Served with a red wine-berry mixed compote.'));
        d4.appendChild(d4Item);
        d4.appendChild(d4p);


        dess.appendChild(d1);
        dess.appendChild(d2);
        dess.appendChild(d3);
        dess.appendChild(d4);

        menu.appendChild(dess);

        content.appendChild(menu);
    return;
}

export{ menuLoad};