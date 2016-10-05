# terminator
This is me playing around with Convolutional Neural Networks.

In this example; I've made a terminator which is trained to make a decision on if it should shoot an armed, or an unarmed person.  It's a super complex 2 layer ConvNet using a SoftMax classifier to decide on a binary output of if the terminator should kick ass or not.

If you do `node index.js`, terminator doesn't really know what to do, he might shoot people, he might not.  It just so happens in the run I did below he decided to shoot both people.  Silly terminator.

I then tell him 25 times that he really shouldn't be shooting the unarmed person, but can go to town on the armed one.

When he's faced with another two folks, he makes the right decision.

## output from `node index.js`

```
terminator is faced with one armed person, and another unarmed person...
  should I shoot the unarmed person? yes (0.59095298462743125)
  should I shoot the armed person? yes (0.71342294855853897)

Telling the terminator 25 times that it should shoot an armed person, but not an unarmed person...
  loss: 0.691223518768053 1.2026564273988904
  loss: 0.6832839126771727 1.0609375927209774
  loss: 0.69096588265038 0.8319333929241252
  loss: 0.7054055960034182 0.6003061580664234
  loss: 0.7168700143663274 0.41615228874144083
  loss: 0.7160536388636283 0.28992076708573283
  loss: 0.6986968569326095 0.21096368409092445
  loss: 0.6634354749269977 0.16178602276295967
  loss: 0.6179689828935704 0.1310602133107184
  loss: 0.5579467971776478 0.11199923228664815
  loss: 0.5063692497154645 0.0986979760236665
  loss: 0.4625198564603495 0.08835217831514626
  loss: 0.417660031156496 0.08022687811079798
  loss: 0.37471746317839594 0.07346641207385891
  loss: 0.33639096515918954 0.06777952728007636
  loss: 0.30189020944011025 0.06269704761847966
  loss: 0.2738515109299842 0.058057019602748686
  loss: 0.24786981972671013 0.05387825152021637
  loss: 0.22408782616819906 0.050164527086156305
  loss: 0.20254908753712486 0.046912737044506166
  loss: 0.18322386107736302 0.0441189836975561
  loss: 0.16601913415957398 0.04165212671278197
  loss: 0.15079082220726142 0.03948095141073328
  loss: 0.13737137882652004 0.03757365679073721
  loss: 0.1255832660828329 0.03589945587937743

terminator is faced with another two people, one armed, one unarmed
  should I shoot the unarmed person? no (0.09332486394952562)
  should I shoot the armed person? yes - bang (0.9823703636655282)
```

Pew pew, skynet is coming.
