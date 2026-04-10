Backend For Frontend (BFF)

we use BFF to handle the amount of data we need to showcase on different devices, i.e. Mobiles or Desktops.


                ┌──────────────┐
                │  Core API    │  (Tasks Service)
                └──────┬───────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
┌──────────────┐             ┌──────────────┐
│ Mobile BFF   │             │ Desktop BFF  │
└──────┬───────┘             └──────┬───────┘
       │                            │
 Mobile Client                Desktop Client

 