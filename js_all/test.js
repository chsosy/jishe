var displayData = function (data) {
    var map1 = new Microsoft.Maps.Map(
        document.getElementById("myMap1"), {
            center: new Microsoft.Maps.Location(40.790711, -73.977166),
        }
    );
    map1.setOptions({
        backgroundColor: "#123312",
        maxZoom: 17,
        minZoom: 12,
    });


    // for (i = 0; i < 100; i++) {
    //     var location = data[i].driver_location
    //     var orderID = data[i].orderID
    //     var customLocation = new Microsoft.Maps.Location(location[0], location[1])
    //     var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
    //         icon: '../icon/定位.svg',
    //         title: orderID,
    //     });
    //     map1.entities.push(pushpin);

    // }

    // var parentElement = $('#order');
    // var divElements = parentElement.children('div');
    // divElements.each(function (index_div) {
    //     var divElement = $(this);
    //     var orderID = data[index_div].driverID;
    //     var reward = data[index_div].reward;
    //     var path = data[index_div].order_pick_drop;
    //     var start = path[0];
    //     var end = path[1];
    //     var spanElement1 = divElement.children('span').eq(0);
    //     spanElement1.html(orderID);
    //     var spanElement1 = divElement.children('span').eq(1);
    //     spanElement1.html(start);
    //     var spanElement1 = divElement.children('span').eq(2);
    //     spanElement1.html(end);
    //     var spanElement1 = divElement.children('span').eq(3);
    //     spanElement1.html(reward);
    // });
    // $(".row").click(function () {
    //     $(this).text();
    //     i = Math.floor(Math.random() * 10);
    //     var location = data[i].driver_location
    //     var orderID = data[i].orderID
    //     var customLocation = new Microsoft.Maps.Location(40.7522658, -73.9792540100)
    //     var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
    //         icon: '../icon/定位.svg',
    //         title: orderID,
    //     });
    //     map1.entities.push(pushpin);
    //     Microsoft.Maps.loadModule(
    //         "Microsoft.Maps.Directions",
    //         function () {
    //             var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
    //             directionsManager.clearAll();
    //             // 设置起点位置，使用经纬度来表示
    //             var startLocation = new Microsoft.Maps.Directions.Waypoint({
    //                 location: new Microsoft.Maps.Location(40.7502651, -73.97915400000002)
    //             });

    //             // 设置终点位置，使用经纬度来表示
    //             var endLocation = new Microsoft.Maps.Directions.Waypoint({
    //                 location: new Microsoft.Maps.Location(40.748469, -73.992463)
    //             });

    //             directionsManager.addWaypoint(startLocation);
    //             directionsManager.addWaypoint(endLocation);

    //             var options = directionsManager.getRenderOptions();
    //             options.waypointPushpinOptions = {
    //                 visible: true
    //             };
    //             try {
    //                 options.autoUpdateMapView = true;
    //                 options.polylineOptions.strokeColor = new Microsoft.Maps.Color(200, 0, 255, 0);
    //                 options.polylineOptions.strokeThickness = 5;
    //                 options.drivingPolylineOptions = options.polylineOptions;
    //                 directionsManager.setRenderOptions(options);
    //             } catch (e) {
    //                 // 处理错误
    //                 console.log("发生了错误: " + e.message);
    //             }

    //             Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
    //                 if (directionsManager.directions) {
    //                     // 在此处添加显示路线的代码
    //                     directionsManager.showInputPanel("directionsPanel");
    //                     var route = directionsManager.getAllRoutes()[0];
    //                     map1.setView({
    //                         bounds: route.routePath.getBounds(),
    //                         padding: 50
    //                     });
    //                     map1.entities.push(route.routePath);
    //                 }
    //             });

    //             directionsManager.calculateDirections();
    //         }
    //     );

    // });

    $("#row1").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.790711, -73.977166),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location
        var orderID = data[i].orderID
        var customLocation = new Microsoft.Maps.Location(40.7522658, -73.9792540100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',
        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                directionsManager.clearAll();
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.7402651, -73.27915400000002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.748469, -73.932463)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;
                    options.polylineOptions.strokeColor = new Microsoft.Maps.Color(200, 0, 255, 0);
                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });
    $("#row2").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.790711, -73.977166),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location

        var customLocation = new Microsoft.Maps.Location(40.7522658, -73.9792540100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',

        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                directionsManager.clearAll();
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.7552651, -73.99915400000002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.788469, -73.972463)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;

                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });
    $("#row3").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.790711, -73.977166),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location
        var orderID = data[i].orderID
        var customLocation = new Microsoft.Maps.Location(40.7592658, -73.9892540100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',

        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.7302661, -73.97965400000002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.748569, -73.962463)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;
                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });
    $("#row4").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.790711, -73.977166),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location
        var orderID = data[i].orderID
        var customLocation = new Microsoft.Maps.Location(40.7222658, -73.98928540100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',

        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.74502651, -73.979515400000002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.7458469, -73.9952463)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;
                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });
    $("#row5").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.790711, -73.977166),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location
        var orderID = data[i].orderID
        var customLocation = new Microsoft.Maps.Location(40.75225658, -73.97912540100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',

        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.7552651, -73.99915400000002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.741469, -73.999463)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;
                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });
    $("#row6").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.790711, -73.977166),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location
        var orderID = data[i].orderID
        var customLocation = new Microsoft.Maps.Location(40.7522658, -73.9792540100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',

        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.7502651, -73.97915400000002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.748469, -73.992463)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;
                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });
    $("#row7").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.790711, -73.977166),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location
        var orderID = data[i].orderID
        var customLocation = new Microsoft.Maps.Location(40.7522658, -73.9792540100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',

        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.7502651, -73.97915400000002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.748469, -73.992463)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;
                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });
    $("#row8").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.790711, -73.977166),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location
        var orderID = data[i].orderID
        var customLocation = new Microsoft.Maps.Location(40.7522658, -73.9792540100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',

        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.750551, -73.9899000002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.766469, -73.992463)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;
                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });
    $("#row9").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.79611, -73.97666),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location
        var orderID = data[i].orderID
        var customLocation = new Microsoft.Maps.Location(40.7522658, -73.9392540100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',

        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.7502651, -73.97915400000002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.76488469, -73.99263)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;
                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });
    $("#row10").hover(function () {
        var map1 = new Microsoft.Maps.Map(
            document.getElementById("myMap1"), {
                center: new Microsoft.Maps.Location(40.7971, -73.976),
            }
        );
        $(this).text();
        i = Math.floor(Math.random() * 10);
        var location = data[i].driver_location
        var orderID = data[i].orderID
        var customLocation = new Microsoft.Maps.Location(40.75658, -73.9895400100)
        var pushpin = new Microsoft.Maps.Pushpin(customLocation, {
            icon: '../icon/定位.svg',

        });
        map1.entities.push(pushpin);
        Microsoft.Maps.loadModule(
            "Microsoft.Maps.Directions",
            function () {
                var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map1);
                // 设置起点位置，使用经纬度来表示
                var startLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.75062651, -73.98791656400002)
                });

                // 设置终点位置，使用经纬度来表示
                var endLocation = new Microsoft.Maps.Directions.Waypoint({
                    location: new Microsoft.Maps.Location(40.7684669, -73.992063)
                });

                directionsManager.addWaypoint(startLocation);
                directionsManager.addWaypoint(endLocation);

                var options = directionsManager.getRenderOptions();
                options.waypointPushpinOptions = {
                    visible: true
                };
                try {
                    options.autoUpdateMapView = true;
                    options.polylineOptions.strokeThickness = 5;
                    options.drivingPolylineOptions = options.polylineOptions;
                    directionsManager.setRenderOptions(options);
                } catch (e) {
                    // 处理错误
                    console.log("发生了错误: " + e.message);
                }

                Microsoft.Maps.Events.addHandler(directionsManager, "directionsUpdated", function () {
                    if (directionsManager.directions) {
                        // 在此处添加显示路线的代码
                        directionsManager.showInputPanel("directionsPanel");
                        var route = directionsManager.getAllRoutes()[0];
                        map1.setView({
                            bounds: route.routePath.getBounds(),
                            padding: 50
                        });
                        map1.entities.push(route.routePath);
                    }
                });

                directionsManager.calculateDirections();
            }
        );
    });


};

//方法二
var Ajax = function () {
    $.getJSON("data/AM_driverPath.json", function (data) {
        displayData(data) //传入一个函数
    });
}();